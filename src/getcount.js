export default function getCount() {
    const count = document.cookie
        .split('; ')
        .find((row) => row.startsWith('count='))
        ?.split('=')[1];

    return count
}