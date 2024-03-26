<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <nuxt-link class="nav__link" to="/" activeClass="nav__link--active">Меню</nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link class="nav__link" to="/" activeClass="nav__link--active">Доставка</nuxt-link>
        </li>
      <li class="nav__item">
        <nuxt-link class="nav__link" to="/" activeClass="nav__link--active">Акции</nuxt-link>
        </li>
      <li class="nav__item">
        <nuxt-link class="nav__link" to="/contacts" activeClass="nav__link--active">Контакты</nuxt-link>
        </li>
    </ul>
  </nav>
</template>

<style src="./style.scss" lang="scss" scoped/>