-- This creates the table for your AdminProject component
CREATE TABLE projects (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  dev_types JSONB DEFAULT '[]'::jsonb, 
  tech_stack JSONB DEFAULT '[]'::jsonb, 
  image_url TEXT
);

-- This sets up the storage bucket for your thumbnails
INSERT INTO storage.buckets (id, name, public) 
VALUES ('project-thumbnails', 'project-thumbnails', true);