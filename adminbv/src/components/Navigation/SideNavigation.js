
export const SideNavigation = () => {

  return (
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
              <div class="sb-sidenav-menu">
                <div class="nav">
                  <div class="sb-sidenav-menu-heading">Quick</div>
                  <a class="nav-link" href="index.php">
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-tachometer-alt"></i>
                    </div>
                    Dashboard
                  </a>

                  <div class="sb-sidenav-menu-heading">Records</div>
                  <a
                    class="nav-link collapsed"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseLayouts"
                    aria-expanded="false"
                    aria-controls="collapseLayouts"
                  >
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-columns"></i>
                    </div>
                    Reservations
                    <div class="sb-sidenav-collapse-arrow">
                      <i class="fas fa-angle-down"></i>
                    </div>
                  </a>
                  <div
                    class="collapse"
                    id="collapseLayouts"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordion"
                  >
                    <nav class="sb-sidenav-menu-nested nav">
                      <a class="nav-link" href="Room_Records.php">
                        Rooms
                      </a>
                      <a class="nav-link" href="Event_Records.php">
                        Events
                      </a>
                    </nav>
                  </div>

                  <a class="nav-link" href="Testimonial_Records.php">
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-quote-left"></i>
                    </div>
                    Testimonials
                  </a>

                  <a class="nav-link" href="Comment_Suggestion_Records.php">
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-comments"></i>
                    </div>
                    Comments & Suggestions
                  </a>

                  <div class="sb-sidenav-menu-heading">Listings</div>
                  <a class="nav-link" href="#">
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-comments"></i>
                    </div>
                    Room Listings
                  </a>

                  <div class="sb-sidenav-menu-heading">Settings</div>
                  <a class="nav-link" href="Account_Records.php">
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-comments"></i>
                    </div>
                    User Accounts
                  </a>
                </div>
              </div>
              <div class="sb-sidenav-footer">
                <div class="small">Logged in as: Richard T.</div>
              </div>
            </nav>
  )
}
