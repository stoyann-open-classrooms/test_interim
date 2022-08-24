<script lang="ts">
  const users = [

{id: 1, firstName: 'Terry', lastName: 'Medhurst', maidenName: 'Smitham', telephone: "+(687) 50.20.35"},
{id: 2, firstName: 'Sheldon', lastName: 'Quigley', maidenName: 'Cole', telephone: "+(687) 28.20.35"},
{id: 3, firstName: 'Terrill', lastName: 'Hills', maidenName: 'Hoeger', telephone: "+(687) 38.20.35",},
{id: 4, firstName: 'Miles', lastName: 'Cummerata', maidenName: 'Maggio', telephone: "+(687) 49.20.35"},
{id: 5, firstName: 'Mavis', lastName: 'Schultz', maidenName: 'Yundt', telephone: "+(687) 38.20.35"},
{id: 6, firstName: 'Alison', lastName: 'Reichert', maidenName: 'Franecki', telephone: "+(687) 21.20.35"},
{id: 7, firstName: 'Oleta', lastName: 'Abbott', maidenName: 'Wyman', telephone: "+(687) 31.20.35"},
{id: 8, firstName: 'Ewell', lastName: 'Mueller', maidenName: 'Durgan', telephone: "+(687) 29.20.35"},
{id: 9, firstName: 'Demetrius', lastName: 'Corkery', maidenName: 'Gleason', telephone: "+(687) 22.20.35"},
{id: 10, firstName: 'Eleanora', lastName: 'Price', maidenName: 'Cummings', telephone: "+(687) 37.20.35"},
{id: 11, firstName: 'Marcel', lastName: 'Jones', maidenName: 'Smith', telephone: "+(687) 39.20.35"},
{id: 12, firstName: 'Assunta', lastName: 'Rath', maidenName: 'Heller', telephone: "+(687) 42.20.35"},
{id: 13, firstName: 'Trace', lastName: 'Douglas', maidenName: 'Lemke', telephone: "+(687) 26.20.35"},
{id: 14, firstName: 'Enoch', lastName: 'Lynch', maidenName: 'Heidenreich', telephone: "+(687) 21.20.35"},
{id: 15, firstName: 'Jeanne', lastName: 'Halvorson', maidenName: 'Cummerata', telephone: "+(687) 26.20.35"},
]

console.log(users);

</script>
<table class="table is-bordered is-fullwidth mb-4 mt-5">
    <thead>
      <tr>
        <th></th>
       
        <th>nom</th>
        <th>Télèphone</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {#each users as user }
      <tr>
             
          <td><i class="fa-solid fa-user"></i></td>
         
          <td>{user.firstName + " " + user.lastName.toUpperCase() } </td>
          <td>{user.telephone}</td>
          <td>
            <button on:click={() => console.log('open') } class="button is-white is-small"><i class="fa-solid fa-ellipsis"></i></button>
           
          </td>
        </tr>
          {/each}
      
   
     
    </tbody>
  </table>