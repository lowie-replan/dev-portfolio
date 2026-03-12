interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags }) => {
  return (
    <div style={{ 
      border: '1px solid #444', 
      borderRadius: '8px', 
      padding: '1.5rem',
      margin: '1rem 0'
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {tags.map(tag => (
          <span key={tag} style={{ 
            background: '#eee', 
            padding: '2px 8px', 
            borderRadius: '4px', 
            fontSize: '0.8rem' 
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;