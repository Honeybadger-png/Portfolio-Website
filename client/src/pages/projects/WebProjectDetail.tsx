import { useParams } from "react-router-dom";
import { webProjects } from "../../Constants/Projects";
import { useEffect, useState } from "react";

const WebProjectDetail = () => {

    const {id} = useParams();
    const [projectId, setProjectId] = useState<number>(0);

    
    useEffect(() => {

    if (id) {

      const numericId = parseInt(id);
      

      setProjectId(numericId);
      

    } else {
      console.error("Project ID is missing from the URL.");
    }
  }, [id]);

  const project = webProjects.find(p=> p.id === projectId);

    if(!project) {
        return <h2>Error : Project not found</h2>
    }

    return (
        <div className="text-white">
            <h1>{project.projectName}</h1>
        </div>
    )
}

export default WebProjectDetail;