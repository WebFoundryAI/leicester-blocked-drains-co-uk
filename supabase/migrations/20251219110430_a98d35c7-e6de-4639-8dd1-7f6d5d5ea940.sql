-- Create table to store dismissed health check issues
CREATE TABLE public.dismissed_health_issues (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  issue_key TEXT NOT NULL UNIQUE, -- e.g. "touch-targets", "cache-lifetimes"
  issue_title TEXT NOT NULL,
  dismissed_by TEXT,
  dismissed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  reason TEXT, -- Optional: why it was dismissed
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.dismissed_health_issues ENABLE ROW LEVEL SECURITY;

-- Admin-only policies (using existing role system)
CREATE POLICY "Admins can view dismissed issues"
ON public.dismissed_health_issues
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "Admins can insert dismissed issues"
ON public.dismissed_health_issues
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "Admins can delete dismissed issues"
ON public.dismissed_health_issues
FOR DELETE
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);