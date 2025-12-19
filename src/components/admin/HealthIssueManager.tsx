import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, X, Plus, Eye, EyeOff, RotateCcw } from "lucide-react";
import { toast } from "sonner";

interface DismissedIssue {
  id: string;
  issue_key: string;
  issue_title: string;
  dismissed_by: string | null;
  dismissed_at: string;
  reason: string | null;
}

// Common health check issues that can be tracked
const COMMON_ISSUES = [
  { key: "touch-targets", title: "Touch targets do not have sufficient size or spacing" },
  { key: "cache-lifetimes", title: "Use efficient cache lifetimes" },
  { key: "contrast-ratio", title: "Background and foreground colors do not have a sufficient contrast ratio" },
  { key: "browser-errors", title: "Browser errors were logged to the console" },
  { key: "image-alt", title: "Image elements do not have [alt] attributes" },
  { key: "meta-description", title: "Document does not have a meta description" },
  { key: "largest-contentful-paint", title: "Largest Contentful Paint element was lazy loaded" },
  { key: "cumulative-layout-shift", title: "Avoid large layout shifts" },
  { key: "render-blocking", title: "Eliminate render-blocking resources" },
  { key: "unused-css", title: "Reduce unused CSS" },
  { key: "unused-js", title: "Reduce unused JavaScript" },
  { key: "text-compression", title: "Enable text compression" },
];

export function HealthIssueManager() {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [newIssueTitle, setNewIssueTitle] = useState("");
  const [showDismissed, setShowDismissed] = useState(false);

  // Fetch dismissed issues
  const { data: dismissedIssues = [], isLoading } = useQuery({
    queryKey: ["dismissed-health-issues"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("dismissed_health_issues")
        .select("*")
        .order("dismissed_at", { ascending: false });
      
      if (error) throw error;
      return data as DismissedIssue[];
    },
  });

  // Dismiss an issue
  const dismissMutation = useMutation({
    mutationFn: async ({ key, title }: { key: string; title: string }) => {
      const { error } = await supabase.from("dismissed_health_issues").insert({
        issue_key: key,
        issue_title: title,
        dismissed_by: user?.email || "admin",
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dismissed-health-issues"] });
      toast.success("Issue dismissed");
    },
    onError: (error) => {
      toast.error(`Failed to dismiss: ${error.message}`);
    },
  });

  // Restore (un-dismiss) an issue
  const restoreMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("dismissed_health_issues")
        .delete()
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dismissed-health-issues"] });
      toast.success("Issue restored - will show in next health check");
    },
    onError: (error) => {
      toast.error(`Failed to restore: ${error.message}`);
    },
  });

  // Add custom issue
  const handleAddCustomIssue = () => {
    if (!newIssueTitle.trim()) {
      toast.error("Enter an issue title");
      return;
    }
    const key = newIssueTitle.toLowerCase().replace(/\s+/g, "-").slice(0, 50);
    dismissMutation.mutate({ key, title: newIssueTitle.trim() });
    setNewIssueTitle("");
  };

  const dismissedKeys = new Set(dismissedIssues.map((i) => i.issue_key));
  const activeIssues = COMMON_ISSUES.filter((i) => !dismissedKeys.has(i.key));

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <CardTitle>Health Issue Tracker</CardTitle>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowDismissed(!showDismissed)}
          >
            {showDismissed ? (
              <>
                <Eye className="h-4 w-4 mr-1" />
                Show Active
              </>
            ) : (
              <>
                <EyeOff className="h-4 w-4 mr-1" />
                Show Dismissed ({dismissedIssues.length})
              </>
            )}
          </Button>
        </div>
        <CardDescription>
          {showDismissed
            ? "Issues you've dismissed - click restore to track again"
            : "Dismiss issues you've fixed or don't need to address"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p className="text-muted-foreground text-sm">Loading...</p>
        ) : showDismissed ? (
          // Show dismissed issues
          <div className="space-y-2">
            {dismissedIssues.length === 0 ? (
              <p className="text-muted-foreground text-sm">No dismissed issues</p>
            ) : (
              dismissedIssues.map((issue) => (
                <div
                  key={issue.id}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                >
                  <div className="flex-1">
                    <p className="text-sm line-through text-muted-foreground">
                      {issue.issue_title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Dismissed {new Date(issue.dismissed_at).toLocaleDateString()} by{" "}
                      {issue.dismissed_by}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => restoreMutation.mutate(issue.id)}
                    disabled={restoreMutation.isPending}
                  >
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Restore
                  </Button>
                </div>
              ))
            )}
          </div>
        ) : (
          // Show active issues to dismiss
          <div className="space-y-4">
            {/* Common issues */}
            <div className="space-y-2">
              {activeIssues.length === 0 ? (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                  <p className="text-green-700 dark:text-green-300 text-sm font-medium">
                    All common issues dismissed!
                  </p>
                </div>
              ) : (
                activeIssues.map((issue) => (
                  <div
                    key={issue.key}
                    className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                  >
                    <div className="flex items-center gap-2 flex-1">
                      <AlertTriangle className="h-4 w-4 text-red-500 shrink-0" />
                      <p className="text-sm text-red-800 dark:text-red-200">
                        {issue.title}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        dismissMutation.mutate({ key: issue.key, title: issue.title })
                      }
                      disabled={dismissMutation.isPending}
                      className="text-red-600 hover:text-red-700 hover:bg-red-100"
                    >
                      <X className="h-4 w-4 mr-1" />
                      Dismiss
                    </Button>
                  </div>
                ))
              )}
            </div>

            {/* Add custom issue */}
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-2">
                Add a custom issue to track:
              </p>
              <div className="flex gap-2">
                <Input
                  value={newIssueTitle}
                  onChange={(e) => setNewIssueTitle(e.target.value)}
                  placeholder="e.g. Missing canonical tags"
                  onKeyDown={(e) => e.key === "Enter" && handleAddCustomIssue()}
                />
                <Button
                  onClick={handleAddCustomIssue}
                  disabled={dismissMutation.isPending}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add & Dismiss
                </Button>
              </div>
            </div>

            {/* Summary badge */}
            {dismissedIssues.length > 0 && (
              <div className="pt-2">
                <Badge variant="secondary">
                  {dismissedIssues.length} issue{dismissedIssues.length !== 1 ? "s" : ""}{" "}
                  dismissed
                </Badge>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
