<template>
    <main class="article-list">
        <h1 style="margin-bottom: 1rem;">Blogs</h1>
        
        <ContentList path="/" v-slot="{ list }">
        <p>{{ list }}</p>
            <div v-for="article in list" :key="article._path">
                <!--TODO: Articles List-->
                <div style="margin-bottom: 2rem;">
                <NuxtLink :to="'/blog'+article._path">{{ article.title }}</NuxtLink>
                <p :v-if="article._dir != ''">{{ article._dir }}</p>
                <p>{{ article.description }}</p>
                </div>
            </div>
        </ContentList>
    </main>
</template>

<style>
.article-list {
    margin: 50px;
}
</style>