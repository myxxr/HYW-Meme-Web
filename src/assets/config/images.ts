const modules = import.meta.glob('../imgs/*.{png,jpg,jpeg,gif,webp}', {
    eager: true,
    import: 'default'
});

// 让 TS 知道这些都是 string
export const imageList = Object.values(modules) as string[];
