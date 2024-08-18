import React, { useEffect, useState } from "react";
import Layout from "../component/layout/Layout";
import Charts from "../component/VisualAssetsPage/Charts";
import Graphs from "../component/VisualAssetsPage/Graphs";
import Calendar from "../component/VisualAssetsPage/Calendar";
import Video from "../component/VisualAssetsPage/Video";
import ThreeDAssets from "../component/VisualAssetsPage/ThreeDAssets";
import { useLocation } from "react-router-dom";

function renderComponent(slug) {
  switch (slug) {
    case "/charts":
      return <Charts />;
    case "/graphs":
      return <Graphs />;
    case "/calendar":
      return <Calendar />;
    case "/video":
      return <Video />;
    case "/3d-assets":
      return <ThreeDAssets />;
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
