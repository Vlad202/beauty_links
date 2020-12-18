import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";

const Landing = lazy(() => import("./pages/Landing/Landing"));
const EyebrowsAndEyelashes = lazy(() => import("./pages/EyebrowsAndEyelashes/EyebrowsAndEyelashes"));
const NailCare = lazy(() => import("./pages/NailCare/NailCare"));
const HairCare = lazy(() => import("./pages/HairCare/HairCare"));
const BodyCare = lazy(() => import("./pages/BodyCare/BodyCare"));
const HairDepilation = lazy(() => import("./pages/HairDepilation/HairDepilation"));
const Cosmetology = lazy(() => import("./pages/Cosmetology/Cosmetology"));
const Makeup = lazy(() => import("./pages/Makeup/Makeup"));
const Barber = lazy(() => import("./pages/Barber/Barber"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse/TermsOfUse"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const CookiesPolicy = lazy(() => import("./pages/CookiesPolicy/CookiesPolicy"));
const HowItWorks = lazy(() => import("./pages/HowItWorks/HowItWorks"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const Registration = lazy(() => import("./pages/Registration/Registration"));
const Login = lazy(() => import("./pages/Login/Login"));
const UserProfile = lazy(() => import("./pages/UserProfile/UserProfile"));
const Bookings = lazy(() => import("./pages/UserProfile/Bookings/Bookings"));
const Achievements = lazy(() =>
  import("./pages/UserProfile/Achievements/Achievements")
);
const FaveMasters = lazy(() =>
  import("./pages/UserProfile/FaveMasters/FaveMasters")
);
const Settings = lazy(() => import("./pages/UserProfile/Settings/Settings"));
const InvitePage = lazy(() =>
  import("./pages/UserProfile/InvitePage/InvitePage")
);
const MasterBasics = lazy(() =>
  import("./pages/UserProfile/MasterBasics/MasterBasics")
);
const MasterCalendar = lazy(() =>
  import("./pages/UserProfile/MasterCalendar/MasterCalendar")
);
const MasterProfile = lazy(() =>
  import("./pages/UserProfile/MasterProfile/MasterProfile")
);
const WorkingHoursPage = lazy(() =>
  import("./pages/UserProfile/WorkingHoursPage/WorkingHoursPage")
);
const MasterLocations = lazy(() =>
  import("./pages/UserProfile/MasterLocations/MasterLocations")
);
const MasterServices = lazy(() =>
  import("./pages/UserProfile/MasterServices/MasterServices")
);
const MasterPage = lazy(() => import("./pages/MasterPage/MasterPage"));
const SearchPage = lazy(() => import("./pages/SeacrhPage/SeacrhPage"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

export default function getRoutes(isAuth, roles, registerIsOpen) {
  const authRoutes = [
    <Route
      path="/user"
      key="/user"
      render={({ match: { url } }) => {
        return (
          <UserProfile type={!roles.includes("master") ? "client" : "master"}>
            {/* это роуты клиента */}
            {!roles.includes("master") ? (
              <Switch>
                <Route
                  path={`${url}/achievements`}
                  component={Achievements}
                  exact
                />
                <Route path={`${url}/bookings`} component={Bookings} exact />
                <Route path={`${url}/settings`} component={Settings} exact />
                <Route
                  path={`${url}/favourites`}
                  component={FaveMasters}
                  exact
                />
                <Redirect to={`${url}/achievements`} />
              </Switch>
            ) : (
              <Switch>
                <Route
                  path={`${url}/masterbasics`}
                  component={MasterBasics}
                  exact
                />
                <Route
                  path={`${url}/calendar`}
                  component={MasterCalendar}
                  exact
                />
                <Route path={`${url}/bookings`} component={Bookings} exact />
                <Route
                  path={`${url}/services`}
                  component={MasterServices}
                  exact
                />
                <Route
                  path={`${url}/workinghours`}
                  component={WorkingHoursPage}
                  exact
                />
                <Route
                  path={`${url}/locations`}
                  component={MasterLocations}
                  exact
                />
                <Route
                  path={`${url}/masterprofile`}
                  component={MasterProfile}
                  exact
                />
                <Route path={`${url}/settings`} component={Settings} exact />
                <Route path={`${url}/invite`} component={InvitePage} exact />
                <Redirect to={`${url}/masterbasics`} />
              </Switch>
            )}
          </UserProfile>
        );
      }}
    />,
    <Route
      path="/master/:masterid"
      key="/master/:masterid"
      exact
      component={MasterPage}
    />,
  ];
  const nonAuthRoutes = [
    <Route path="/register" key="/register" component={Registration} />,
    <Route path="/login" key="/login" component={Login} />,
    <Route path="/search" key="/search" component={SearchPage} />,
    <Route
      path="/user"
      key="/user"
      render={({ match: { url } }) => {
        return (
          <UserProfile type={roles.includes("master") ? "client" : "master"}>
            {/* это роуты клиента */}
            {roles.includes("master") ? (
              <Switch>
                <Route
                  path={`${url}/achievements`}
                  component={Achievements}
                  exact
                />
                <Route path={`${url}/bookings`} component={Bookings} exact />
                <Route path={`${url}/settings`} component={Settings} exact />
                <Route
                  path={`${url}/favourites`}
                  component={FaveMasters}
                  exact
                />
                <Redirect to={`${url}/achievements`} />
              </Switch>
            ) : (
              <Switch>
                <Route
                  path={`${url}/masterbasics`}
                  component={MasterBasics}
                  exact
                />
                <Route
                  path={`${url}/calendar`}
                  component={MasterCalendar}
                  exact
                />
                <Route path={`${url}/bookings`} component={Bookings} exact />
                <Route
                  path={`${url}/services`}
                  component={MasterServices}
                  exact
                />
                <Route
                  path={`${url}/workinghours`}
                  component={WorkingHoursPage}
                  exact
                />
                <Route
                  path={`${url}/locations`}
                  component={MasterLocations}
                  exact
                />
                <Route
                  path={`${url}/masterprofile`}
                  component={MasterProfile}
                  exact
                />
                <Route path={`${url}/settings`} component={Settings} exact />
                <Route path={`${url}/invite`} component={InvitePage} exact />
                <Redirect to={`${url}/masterbasics`} />
              </Switch>
            )}
          </UserProfile>
        );
      }}
    />,
    <Route
      path="/master/:masterid"
      key="/master/:masterid"
      exact
      component={MasterPage}
    />,
  ];
  if (registerIsOpen) {
    authRoutes.push(
      <Route path="/register" key="/register" component={Registration} />
    );
  }
  return (
    <Suspense fallback={<Preloader height="80vh" />}>
      <Switch>
        <Route path="/" key="/" exact component={Landing} />
        <Route path="/nail-care" key="/nail-care" exact component={NailCare} />
        <Route path="/eyebrows-and-eyelashes" key="/eyebrows-and-eyelashes" exact component={EyebrowsAndEyelashes} />
        <Route path="/cosmetology" key="/cosmetology" exact component={Cosmetology} />
        <Route path="/hair-care" key="/hair-care" exact component={HairCare} />
        <Route path="/body-care" key="/body-care" exact component={BodyCare} />
        <Route path="/hair-depilation" key="/hair-depilation" exact component={HairDepilation} />
        <Route path="/makeup" key="/makeup" exact component={Makeup} />
        <Route path="/barber" key="/barber" exact component={Barber} />
        <Route path="/terms-of-use" key="/terms-of-use" exact component={TermsOfUse} />
        <Route path="/privacy-policy" key="/privacy-policy" exact component={PrivacyPolicy} />
        <Route path="/cookies-policy" key="/cookies-policy" exact component={CookiesPolicy} />
        <Route path="/how-it-works" key="/how-it-works" exact component={HowItWorks} />
        <Route path="/contacts" key="/contacts" exact component={Contacts} />
        {isAuth ? authRoutes : nonAuthRoutes}
        <Route path="/404" key="/404" component={NotFound} />

        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
}
