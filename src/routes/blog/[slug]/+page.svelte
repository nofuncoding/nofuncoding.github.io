<script lang="ts">
    	import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    const component = data.component
    const { title, description, date, tag } = data.frontmatter
</script>

<div>
    <p>{title}</p>
    {@render component()}
</div>