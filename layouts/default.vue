<template>
  <section class="layout-default">
    <slot />
  </section>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');

:root {
  	--color-blackpearl: #0a041c;
	--color-manatee: #9896a1;
	--color-whisper: #ececf4;
	--color-athensgray: #f7f7f9;
	--color-white: #ffffff;
  	--color-electricviolet: #7445fb;
	--color-shamrock: #2dc78f;
	--color-algaegreen: #8edec2;
	--color-applegreen: #e5f5f0;
	--color-cinnabar: #ea4d4d;
	--color-cinderella: #fbdbdb;

	--font-nano-light: 400 1.0rem/1.0rem 'SF Pro Display', sans-serif;
	--font-tiny-light: 400 1.2rem/1.0rem 'SF Pro Display', sans-serif;
  	--font-small-light: 400 1.4rem/1.4rem 'SF Pro Display', sans-serif;
	--font-small-semibold: 600 1.4rem/1.4rem 'SF Pro Display', sans-serif;
	--font-semismall-semibold: 600 1.4rem/2.4rem 'SF Pro Display', sans-serif;
	--font-regular-light: 400 1.6rem/2.4rem 'SF Pro Display', sans-serif;
	--font-regular-medium: 500 1.6rem/2.4rem 'SF Pro Display', sans-serif;
	--font-big-medium: 500 1.8rem/2.4rem 'SF Pro Display', sans-serif;
	--font-large-medium: 500 2.0rem/2.4rem 'SF Pro Display', sans-serif;
	--font-huge-light: 300 5.6rem/5.6rem 'SF Pro Display', sans-serif;
}

*,
*::after,
*::before {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
	vertical-align: baseline;
	overscroll-behavior: none;

	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
html {
	font: 300 62.5%/1 'SF Pro Display', sans-serif;
}
body {
	font: var(--font-light) var(--font-size)/var(--line-height) var(--font-text-headings, sans-serif);
}
img {
	max-width: 100%;
	height: auto;
	object-fit: contain;
}
ol, ul {
	list-style: none;
}
a {
	text-decoration: none;
}
table {
	border-collapse: collapse;
}
textarea {
	white-space: revert;
}
.layout-default {
	background: var(--color-blackpearl);
 	width: 100%;
 	height: 100vh;
	display: grid;
	place-items: center;
	overflow: hidden;
}
</style>
