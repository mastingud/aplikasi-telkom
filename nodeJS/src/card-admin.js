class CardAdmin extends HTMLElement{
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
      <div id="wrapper">
    <div id="content-wrapper">
      <div class="container-fluid">
        <div class="row">
              <div class="col-xl-3 col-sm-6 mb-3">
                <div class="card text-danger border-danger o-hidden h-100">
                  <div class="card-body">
                    <div class="card-body-icon">
                      <i class="fas fa-fw fa-book"></i>
                    </div>
                    <div class="mr-5">                
                      <p>Jumlah BUMN </h3></p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-sm-6 mb-3">
                <div class="card text-danger border-danger o-hidden h-100">
                  <div class="card-body">
                    <div class="card-body-icon">
                      <i class="fas fa-fw fa-user-friends"></i>
                    </div>
                    <div class="mr-5"><p>Jumlah UMKM Register</h3></p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-sm-6 mb-3">
                <div class="card text-danger border-danger o-hidden h-100">
                  <div class="card-body">
                    <div class="card-body-icon">
                      <i class="fas fa-fw fa-handshake"></i>
                    </div>
                    <div class="mr-5"><p>Order Transaksi</h3></div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-sm-6 mb-3">
                  <div class="card text-danger border-danger o-hidden h-100">
                    <div class="card-body">
                      <div class="card-body-icon">
                        <i class="fas fa-fw fa-money-bill-wave"></i>
                      </div>
                      <div class="mr-5"><p>Nilai Transaksi</h3></div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                  </div>
                </div>
                <script src="../vendor/jquery/jquery.min.js"></script>
                <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>
                <script src="../vendor/chart.js/Chart.min.js"></script>
                <script src="../js/sb-admin.min.js"></script>
                `
            }
        }
customElements.define ("card-admin",CardAdmin);