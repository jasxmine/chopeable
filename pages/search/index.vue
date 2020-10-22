<template>
  <div class="container-fluid">
    <div class="row">
      <div id="filter option" class="col-sm-3 card">
        <div class="card-body">
          <h3 class="card-title">Filter</h3>
          <br />
          <h4 class="card-subtitle">Location</h4>
          <form id="location">
            <input type="checkbox" /> West <br />
            <input type="checkbox" /> East <br />
            <input type="checkbox" /> South <br />
            <input type="checkbox" /> North <br />
            <input type="checkbox" /> Central <br />
          </form>
          <br />
          <h4 class="card-subtitle">Cousine Type</h4>
          <form id="location">
            <input type="checkbox" /> Indian <br />
            <input type="checkbox" /> Western <br />
            <input type="checkbox" /> Korean <br />
            <input type="checkbox" /> Japanese <br />
            <input type="checkbox" /> Chinese <br />
          </form>
        </div>
      </div>
      <div id="item" class="col-sm-9">
        <nav class="navbar navbar-expand-lg navbar-custom">
          <a class="navbar-brand" href="#">Search by Letter</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="alphaSearch" class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> A </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> B </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> C </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> D </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> E </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> F </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> G </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> H </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> I </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> J </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> K </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> L </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> M </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> N </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> O </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> P </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> Q </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> R </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> S </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> T </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> U </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> V </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> W </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> X </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> Y </strong></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><strong> Z </strong></a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action flex-column align-items-start"
            style="border-top: 0px"
          >
            <div class="d-flex w-100 justify-content-between">
              <h3 class="mb-1">Restaurant Name</h3>
              <small class="text-muted">%mil from location%</small>
            </div>
            <img src="/desserts.jpg" alt="%Restaurant Pic" />
            <p class="mb-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <small class="text-muted">%Additional Info% </small>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action flex-column align-items-start"
          >
            <div class="d-flex w-100 justify-content-between">
              <h3 class="mb-1">Restaurant Name</h3>
              <small class="text-muted">%mil from location%</small>
            </div>
            <img src="/malaysian.jpg" alt="%Restaurant Pic" />
            <p class="mb-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <small class="text-muted">%Additional Info% </small>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action flex-column align-items-start"
          >
            <div class="d-flex w-100 justify-content-between">
              <h3 class="mb-1">Restaurant Name</h3>
              <small class="text-muted">%mil from location%</small>
            </div>
            <img src="/italian.jpg" alt="%Restaurant Pic" />
            <p class="mb-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <small class="text-muted">%Additional Info% </small>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action flex-column align-items-start"
          >
            <div class="d-flex w-100 justify-content-between">
              <h3 class="mb-1">Restaurant Name</h3>
              <small class="text-muted">%mil from location%</small>
            </div>
            <img src="/american.jpg" alt="%Restaurant Pic" />
            <p class="mb-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <small class="text-muted">%Additional Info% </small>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
.navbar-custom {
  background-color: white;
}
</style>
