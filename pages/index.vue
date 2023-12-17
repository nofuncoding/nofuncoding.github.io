<template>
  <div class="me">
    <div class="header">
      <h2 id="my-name">NoFun</h2>

      <div class="page-links">
        <ul class="ul">
          <li><NuxtLink to="/about/">About</NuxtLink></li>
          <li><NuxtLink to="/blog/">Blog</NuxtLink></li>
        </ul>
        
        
      </div>
    </div>

    <p id="my-sign">“NoFun is Not Found.”</p>
    
    <div class="ext-links">
      <ul>
        <li>
          <NuxtLink to="https://github.com/nofuncoding">
            <Icon name="uil:github" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.me {
  /*width: 100vw;
  height: 100vh;*/

  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.me .header {
  display: flex;
  align-items: center;
  justify-content: center;
}

#my-name {
  margin: 5px;
  margin-right: 20px;
}

#my-sign {
  font-style: italic;
  font-weight: 300;
  font-size: 0.8rem;
  color: #888;
}

/*.me .links {
  flex-grow: 1;
}*/

.me .ext-links {
  margin-top: 1rem;
}

.me .page-links ul, .me .ext-links ul {
  list-style-type: none;
}

.me .page-links ul li {
  float: left;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #aaa;
}

.me .page-links ul li:last-child {
  border-right: none;
  margin-right: 0;
  padding-right: 0;
}

.me .ext-links ul li a {
  color: white;
}
</style>