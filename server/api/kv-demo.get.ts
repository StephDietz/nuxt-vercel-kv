export default eventHandler(async (event) => {
	const storage = useStorage('data');
	let pageVisits = (await storage.getItem('pageVisits')) as number;
	const updatedPageVisits = pageVisits + 1;
	await storage.setItem('pageVisits', updatedPageVisits);
	return {
		pageVisits: updatedPageVisits
	};
});
