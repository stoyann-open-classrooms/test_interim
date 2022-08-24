<script lang="ts">
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import SearchBar from '../components/SearchBar.svelte';
	import UserList from '../components/UserList.svelte';
	import '../app.scss';
  const users = [
		{
			id: 1,
			firstName: 'Terry',
			lastName: 'Medhurst',
			maidenName: 'Smitham',
			telephone: '+(687) 50.20.35'
		},
		{
			id: 2,
			firstName: 'Sheldon',
			lastName: 'Quigley',
			maidenName: 'Cole',
			telephone: '+(687) 28.20.35'
		},
		{
			id: 3,
			firstName: 'Terrill',
			lastName: 'Hills',
			maidenName: 'Hoeger',
			telephone: '+(687) 38.20.35'
		},
		{
			id: 4,
			firstName: 'Miles',
			lastName: 'Cummerata',
			maidenName: 'Maggio',
			telephone: '+(687) 49.20.35'
		},
		{
			id: 5,
			firstName: 'Mavis',
			lastName: 'Schultz',
			maidenName: 'Yundt',
			telephone: '+(687) 38.20.35'
		},
		{
			id: 6,
			firstName: 'Alison',
			lastName: 'Reichert',
			maidenName: 'Franecki',
			telephone: '+(687) 21.20.35'
		},
		{
			id: 7,
			firstName: 'Oleta',
			lastName: 'Abbott',
			maidenName: 'Wyman',
			telephone: '+(687) 31.20.35'
		},
		{
			id: 8,
			firstName: 'Ewell',
			lastName: 'Mueller',
			maidenName: 'Durgan',
			telephone: '+(687) 29.20.35'
		},
		{
			id: 9,
			firstName: 'Demetrius',
			lastName: 'Corkery',
			maidenName: 'Gleason',
			telephone: '+(687) 22.20.35'
		},
		{
			id: 10,
			firstName: 'Eleanora',
			lastName: 'Price',
			maidenName: 'Cummings',
			telephone: '+(687) 37.20.35'
		},
	
	];
	
</script>

<Header />
<main class="container p-5">
	<SearchBar />
	<UserList {users}/>
</main>
<Footer />
