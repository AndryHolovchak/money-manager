import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import { useAppDispatch } from "./app/hooks";
import { CreateQuickPayment } from "./pages/addQuickPayment/CreateQuickPayment";
import { Chart } from "./pages/chart/Chart";
import { Home } from "./pages/home/Home";
import { Settings } from "./pages/settings/Settings";
import { loadBasicChartInfoAction } from "./sagas/chartSaga";
import { loadPaymentsAction } from "./sagas/historySaga";
import { loadQuickPaymentsAction } from "./sagas/userSaga";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPaymentsAction());
    dispatch(loadQuickPaymentsAction());
    dispatch(loadBasicChartInfoAction());
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/chart" component={Chart} />
      <Route path="/settings" component={Settings} />
      <Route path="/add-quick-payment" component={CreateQuickPayment} />
    </Switch>
  );
};

export default App;
