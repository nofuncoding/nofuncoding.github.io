<template>

<p>{{ $route.params.slug }}</p>
<p>{{ $route.path }}</p>

<ContentDoc :path="$route.params.slug.join('/')" />
</template>