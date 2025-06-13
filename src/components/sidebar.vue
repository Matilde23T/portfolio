<template>
<aside :class="`${isExpanded ? 'is-expanded' : ''}`">
<div class="menut-toggle-wrap">
    <button class="menu-toggle">
        <span class="material-icons" @click="toggleMenu">
            keyboard_double_arrow_right
        </span>
    </button>
</div>

<h3>Menu</h3>
<div class="menu">
    <router-link class="button" to="/">
  <span class="material-icons">home</span>
  <span class="text">home</span>
    </router-link>
     <router-link class="button" to="/about">
  <span class="material-icons">description</span>
  <span class="text">about</span>
    </router-link>
    <router-link class="button" to="/contact">
  <span class="material-icons">mail</span>
  <span class="text">contact</span>
    </router-link>

</div>
</aside>
</template>

<script setup > 
import { ref } from 'vue'

const isExpanded = ref(localStorage.getItem("isExpanded") === "true")
const toggleMenu = ()=>{
isExpanded.value = ! isExpanded.value
localStorage.setItem("isExpanded", isExpanded.value)
}

</script>

<style lang="scss" scoped>

aside {
    display: flex;
    flex-direction: column;

    background-color: var(--dark);
    color: var(--light);
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;

    transition: 0.2s ease-out;
    
.menu-toggle-wrap{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative ;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle{
       transition: 0.2s ease-out;
       
        .material-icons{
            font-size: 2rem;
            color: var(--light);
            background-color: none;
          transition: 0.2s ease-out;
        }

        &:hover{
            .material-icons{
                color: var(--primary);
                transform: translateX(0.5rem);
            }
        }
    }
}
h3, .button .text{
  opacity: 0;
  transition: 0.3s ease-out;  
}

h3{
    color: var(--grey);
    font-family: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
}
.menu{
    margin: 0 -1rem;

    .button{
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0.5rem 1rem;
        transition: 0.2s ease-out;


        .material-icons{
            font-size: 2rem;
            color: var(--light);
            transition: 0.2s ease-out;
            margin-right: 1rem;
        }

        .text{
            color: var(--light);
             transition: 0.2s ease-out;
        }

        &:hover, &.router-link-exact-active{
            background-color: var(--dark-alt);

            .material-icons, .text{
                color:var(--primary) ;
            }
        }
        &.router-link-exact-active{
            border-right:5px solid var(--primary);
        }
    }
}
    &.is-expanded{
        width: var(--sidebar-width);
        .menu-toggle-wrap{
            top: -3rem;
        }
        .menu-toggle{
            transform: rotate(-180deg);
        }

        h3, .button .text{
  opacity: 1;
  transition: 0.3s ease-out;  
}

.button{
  .material-icons{
    margin-right: 1rem;
  }
}
    }
    @media (max-width: 768px){
        position: fixed;
        z-index: 99;
    }
}

</style>