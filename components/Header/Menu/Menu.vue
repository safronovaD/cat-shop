<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__item">
        <nuxt-link class="menu__link" to="/" activeClass="menu__link--active">Меню</nuxt-link>
      </li>
      <li class="menu__item">
        <nuxt-link class="menu__link" to="/" activeClass="menu__link--active">Доставка</nuxt-link>
        </li>
      <li class="menu__item">
        <nuxt-link class="menu__link" to="/" activeClass="menu__link--active">Акции</nuxt-link>
        </li>
      <li class="menu__item">
        <nuxt-link class="menu__link" to="/contacts" activeClass="menu__link--active">Контакты</nuxt-link>
        </li>
    </ul>
  </nav>
</template>

<style src="./style.scss" lang="scss" scoped/>