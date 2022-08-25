<script lang="ts">
  import logo from '../assets/parteners_interim_logo.png'

</script>
<header class='has-navbar-fixed-top p-2 mb-4 '>
    <nav class="navbar"  aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img class="logo" src={logo} alt="">
            </a>

            <button class="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
          </button>
        </div>

        <div class="navbar-menu  ">
            <div class="navbar-start">
                <a class="navbar-item" href="/">
                    <i class=" mr-2 fa-solid fa-magnifying-glass"></i>Recherche
                </a>

                <a class="navbar-item" href="/">
                    <i  class=" mr-2 fa fa-plus"></i>  Ajouter un uttilisateur
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link" href="/">
                        Aide
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item" href="/">
                            <i class=" mr-2 fa fa-book"></i> Documentation
                        </a>
        
                        <a class="navbar-item" href="/">
                            <i class=" mr-2 fa-solid fa-comment-dots"></i> A propos
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item" href="/">
                            <i class=" mr-2 fa  fa-bug"></i>  Signaler un problème
                        </a>
                    </div>
                </div>
            </div>

            
          
        </div>
    </nav>
</header>