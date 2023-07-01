import { Footer } from "../components/Footer/Footer";
import { SideNavigation } from "../components/Navigation/SideNavigation";
import { TopNavigation } from "../components/Navigation/TopNavigation";

export const Home = () => {
  return (
    <>
      <div class="sb-nav-fixed">
        <TopNavigation />
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <SideNavigation />
          </div>
          <div id="layoutSidenav_content">
            <main>
              <div class="container-fluid px-4">
                <h1 class="mt-4">Dashboard</h1>
                <ol class="breadcrumb mb-4">
                  <li class="breadcrumb-item active">Dashboard</li>
                </ol>
                <div class="row">
                  <div class="col-xl-3 col-md-6">
                    <div class="card bg-primary text-white mb-4">
                      <div class="card-body">Room Reservations (25)</div>
                      <div class="card-footer d-flex align-items-center justify-content-between">
                        <a class="small text-white stretched-link" href="#">
                          View Details
                        </a>
                        <div class="small text-white">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-md-6">
                    <div class="card bg-warning text-white mb-4">
                      <div class="card-body">Events Reservations (17)</div>
                      <div class="card-footer d-flex align-items-center justify-content-between">
                        <a class="small text-white stretched-link" href="#">
                          View Details
                        </a>
                        <div class="small text-white">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-md-6">
                    <div class="card bg-success text-white mb-4">
                      <div class="card-body">Testimonials (7)</div>
                      <div class="card-footer d-flex align-items-center justify-content-between">
                        <a class="small text-white stretched-link" href="#">
                          View Details
                        </a>
                        <div class="small text-white">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-md-6">
                    <div class="card bg-danger text-white mb-4">
                      <div class="card-body">Inbox (93)</div>
                      <div class="card-footer d-flex align-items-center justify-content-between">
                        <a class="small text-white stretched-link" href="#">
                          View Details
                        </a>
                        <div class="small text-white">
                          <i class="fas fa-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content Section */}

                
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
