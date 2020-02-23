import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Loadable from "react-loadable";
import BlogShow from "../views/BlogShow";
import { BounceLoader } from "react-spinners";

// Dynamic load of components, instead of static, webpack will take Admin into a separate bundle. Only useful if we're shaving off 20+KB per file before this becomes worth it
const LoadableAdmin = Loadable({
  loader: () => import("../views/Admin"),
  loading() {
    return <BounceLoader sizeUnit={"px"} size={150} color={"#fde0dc"} />;
  }
});

const LoadableQuiz = Loadable({
  loader: () => import("../views/Quiz"),
  loading() {
    return <BounceLoader sizeUnit={"px"} size={150} color={"#fde0dc"} />;
  }
});

const LoadableQuizSelection = Loadable({
  loader: () => import("../views/QuizSelection"),
  loading() {
    return <BounceLoader sizeUnit={"px"} size={150} color={"#fde0dc"} />;
  }
});

const LoadableQuizResult = Loadable({
  loader: () => import("../views/QuizResult"),
  loading() {
    return <BounceLoader sizeUnit={"px"} size={150} color={"#fde0dc"} />;
  }
});

const LoadableHome = Loadable({
  loader: () => import("../views/Home"),
  loading() {
    return <BounceLoader sizeUnit={"px"} size={150} color={"#fde0dc"} />;
  }
});

const LoadableVerify = Loadable({
  loader: () => import("../views/Verify"),
  loading() {
    return <BounceLoader sizeUnit={"px"} size={150} color={"#fde0dc"} />;
  }
});


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={LoadableHome} />
          <Route path="/blogs" component={BlogShow} />
          <Route path="/blog/:id" component={BlogShow} />
          <Route path="/select_quiz" component={LoadableQuizSelection} />
          <Route path="/quiz" component={LoadableQuiz} />
          <Route path="/admin" component={LoadableAdmin} />
          <Route path="/result" component={LoadableQuizResult} />
          <Route path="/verify" component={LoadableVerify} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
