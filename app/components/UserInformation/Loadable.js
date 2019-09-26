/**
 *
 * Asynchronously loads the component for UserInformation
 *
 */

import Loadable from "react-loadable";

export default Loadable({
  loader: () => import("./index"),
  loading: () => null
});
