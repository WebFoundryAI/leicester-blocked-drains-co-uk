import { useAIContent } from "@/hooks/useAIContent";
import { AITemplateName } from "@/config/aiPrompts";
import { Skeleton } from "@/components/ui/skeleton";

interface AIContentBlockProps {
  type: string;
  templateName: AITemplateName;
  variables: Record<string, string>;
  keyParts?: string[];
  fallback?: React.ReactNode;
  className?: string;
}

export function AIContentBlock({
  type,
  templateName,
  variables,
  keyParts = [],
  fallback,
  className = "",
}: AIContentBlockProps) {
  const { content, isLoading, error, isCached } = useAIContent(
    type,
    templateName,
    variables,
    keyParts
  );

  if (isLoading) {
    return (
      <div className={`space-y-3 ${className}`}>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[95%]" />
        <Skeleton className="h-4 w-[85%]" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    );
  }

  if (error) {
    console.error("AI content error:", error);
    if (fallback) return <>{fallback}</>;
    return (
      <p className={`text-muted-foreground ${className}`}>
        Content temporarily unavailable. Please try again later.
      </p>
    );
  }

  if (!content) {
    if (fallback) return <>{fallback}</>;
    return null;
  }

  // Clean markdown syntax and split into paragraphs
  const cleanMarkdown = (text: string): string => {
    return text
      // Remove markdown headers (# ## ### etc.)
      .replace(/^#{1,6}\s+/gm, '')
      // Remove bold/italic markers but keep text
      .replace(/\*\*\*(.*?)\*\*\*/g, '$1')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/__(.*?)__/g, '$1')
      .replace(/_(.*?)_/g, '$1')
      // Remove horizontal rules
      .replace(/^[-*_]{3,}$/gm, '')
      // Remove emoji markers that might appear at start of lines
      .replace(/^[🚧🔧💧🏠📞✅❌⚠️🚿🛁🚽◆◇●○■□▪▫•]\s*/gm, '')
      // Remove emojis anywhere in the text
      .replace(/[🚧🔧💧🏠📞✅❌⚠️🚿🛁🚽◆◇●○■□▪▫•]/g, '')
      // Clean up extra whitespace
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  };

  const paragraphs = cleanMarkdown(content)
    .split(/\n\n+/)
    .filter((p) => p.trim())
    .map((p) => p.trim());

  return (
    <div className={`space-y-4 ${className}`}>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-muted-foreground leading-relaxed text-2xl md:text-3xl">
          {paragraph}
        </p>
      ))}
      {process.env.NODE_ENV === "development" && isCached && (
        <span className="text-xs text-muted-foreground/50">(cached)</span>
      )}
    </div>
  );
}
