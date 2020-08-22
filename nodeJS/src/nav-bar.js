class NavBar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }
    
    render(){
      this.shadowDOM.innerHTML= `
      <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
      <link href="../vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">
      <link href="../css/sb-admin.css" rel="stylesheet">
      <nav class="navbar navbar-expand navbar-dark bg-danger static-top">
      <a class="navbar-brand mr-1" href="#">Dashboard</a>
       <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
       </form>
          <ul class="navbar-nav ml-auto ml-md-0">
              <li class="nav-item dropdown no-arrow mx-1">
                      <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                      <i class="fas fa-bell fa-fw"></i>
                  </a>
              </li>
              <li class="nav-item dropdown no-arrow mx-1">
                  <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-envelope fa-fw"></i>
                  </a>
              </li>
              <li class="nav-item dropdown no-arrow">
                  <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-user-circle fa-fw"></i>
                  </a>
              </li>
          </ul>
      </nav>
                
      <script src="../vendor/jquery/jquery.min.js"></script>
      <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>
      <script src="../vendor/chart.js/Chart.min.js"></script>
      <script src="../js/sb-admin.min.js"></script>
      `
    }
}
customElements.define("nav-bar", NavBar);