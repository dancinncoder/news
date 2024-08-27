import React, { useEffect, useState } from "react";
import Layout from "../component/layout/Layout";
import Table from "../component/VisualAssetsPage/Table";
import Calendar from "../component/VisualAssetsPage/Calendar";
import Video from "../component/VisualAssetsPage/Video";
import { useLocation } from "react-router-dom";
import Charts from "../component/VisualAssetsPage/charts/Charts";
import InteractiveAssets from "../component/VisualAssetsPage/interactive-assets/InteractiveAssets";

function renderComponent(slug) {
  switch (slug) {
    case "/table":
      return <Table />;
    case "/charts":
      return <Charts />;
    case "/calendar":
      return <Calendar />;
    case "/video":
      return <Video />;
    case "/interactive-assets":
      return <InteractiveAssets />;
    default:
      return null;
  }
}

function VisualAssetsPage() {
  const location = useLocation();
  const [activatedSlug, setActivatedSlug] = useState(location.pathname);

  useEffect(() => {
    setActivatedSlug(location.pathname);
  }, [location.pathname]);

  const activeComponent = renderComponent(activatedSlug);

  return (
    <Layout>
      <main>{activeComponent}</main>
    </Layout>
  );
}

export default VisualAssetsPage;
