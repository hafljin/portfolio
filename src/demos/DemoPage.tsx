import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DemoLayout from './DemoLayout';
import LPTemplate from './templates/LPTemplate';
import HPTemplate from './templates/HPTemplate';
import WebAppTemplate from './templates/WebAppTemplate';
import LearningTemplate from './templates/LearningTemplate';
import { demoConfigs } from './demoConfig';

const DemoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const config = id ? demoConfigs[id] : null;

  if (!config) {
    return <Navigate to="/" replace />;
  }

  const renderTemplate = () => {
    switch (config.template) {
      case 'lp':
        return <LPTemplate config={config} />;
      case 'hp':
        return <HPTemplate config={config} />;
      case 'webapp':
        return <WebAppTemplate config={config} />;
      case 'learning':
        return <LearningTemplate config={config} />;
      default:
        return <LPTemplate config={config} />;
    }
  };

  return (
    <DemoLayout title={config.title}>
      {renderTemplate()}
    </DemoLayout>
  );
};

export default DemoPage;
