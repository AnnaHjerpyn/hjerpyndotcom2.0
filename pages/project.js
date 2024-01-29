import Head from 'next/head';
import { motion } from 'framer-motion';
import ProjectList from "@components/Project";

const Projects = () => {
  return (
    <div>
      <Head>
        <title>Projects - Anna Hjerpyn</title>
      </Head>
      <main>
        <h1>Projects</h1>

        {/* Wrap the ProjectList component with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProjectList />
        </motion.div>
      </main>
    </div>
  );
};

export default Projects;
