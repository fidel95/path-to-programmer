<script>
	import Select from 'svelte-select';

	import { Styles, Container, Col, Row } from 'sveltestrap';
	let items = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'pizza', label: 'Pizza' },
		{ value: 'cake', label: 'Cake' },
		{ value: 'chips', label: 'Chips' },
		{ value: 'ice-cream', label: 'Ice Cream' }
	];

	let selectedValue = { value: 'cake', label: 'Cake' };

	function handleSelect(event) {
		console.log('selected item', event.detail);
		// .. do something here 🙂
	}
</script>

<svelte:head><title>Home Page</title></svelte:head>

<Styles />

<Container>
	<Row>
		<Col>
			<Select {items} {selectedValue} on:select={handleSelect} />
		</Col>
		<Col
			>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet vehicula auctor.
			Praesent vitae mi dolor. Integer ultrices magna nisi, sit amet porttitor arcu bibendum
			vulputate. Pellentesque pretium nibh id enim convallis cursus in ac nulla. Proin venenatis
			laoreet suscipit. Vestibulum eget est at mi consequat rhoncus sit amet sit amet enim. Aliquam
			in volutpat leo, a pretium nibh. Integer non eros semper nunc condimentum aliquam. Duis et
			elementum ipsum. Etiam vehicula orci vitae quam facilisis, ac ornare ante eleifend. Maecenas
			efficitur facilisis neque, ut efficitur sapien tempus a. Donec molestie, elit nec cursus
			rutrum, diam arcu tristique augue, sit amet ultrices tortor leo eget ipsum. Proin convallis ac
			leo quis faucibus. Vestibulum id convallis mauris. Quisque vitae dui vitae lacus bibendum
			posuere at et magna. Quisque efficitur tincidunt commodo. Maecenas ac placerat dolor, in
			scelerisque velit. Sed porta eros sapien. Sed eleifend, magna eget fermentum tincidunt, est
			mauris accumsan urna, at convallis purus diam eu lacus. Mauris imperdiet rutrum blandit. Nam
			lectus ipsum, dignissim id accumsan nec, finibus vel risus. Suspendisse euismod nec tellus sed
			euismod. Aenean sagittis tempus auctor. Nunc ac eros et justo fringilla ultrices quis non sem.
			Donec varius ac justo eu pretium. Duis quis magna tincidunt, lobortis tellus non, tempor
			velit. Sed molestie feugiat nulla, vel facilisis nunc. Donec eros nisl, consequat et quam eu,
			sollicitudin fermentum leo. Sed bibendum euismod mollis. Pellentesque facilisis eleifend
			libero in tempus. Pellentesque mattis varius nulla dictum sagittis. Integer aliquam turpis
			vitae tempus fermentum. Morbi id venenatis ligula, sit amet volutpat diam. Nunc vel euismod
			sapien. Donec vehicula metus vel gravida tincidunt. Etiam condimentum non velit ut venenatis.
			Nullam elementum, lacus nec fringilla sagittis, risus ante convallis ipsum, nec laoreet ante
			leo quis ligula. Maecenas enim justo, ultrices sit amet scelerisque vel, faucibus eget risus.
			Donec laoreet nisi eu pulvinar cursus. Sed tincidunt est arcu. Integer id dui in tellus
			bibendum sagittis. Ut non eros nibh. Suspendisse ligula libero, eleifend eget ipsum lacinia,
			dapibus laoreet ex. Praesent malesuada felis at magna tempor mollis. In non tempus nunc, non
			fermentum mi. Sed ornare congue nibh et hendrerit. Integer in nisi vitae lacus condimentum
			aliquet. Pellentesque at magna tempus, sollicitudin purus in, tempus est. Vivamus turpis est,
			ornare sit amet dapibus non, condimentum quis risus. Integer scelerisque velit in maximus
			suscipit. Integer magna turpis, bibendum quis elit auctor, tempor maximus erat. Proin vitae
			imperdiet libero. Cras ac sem et ipsum tristique mollis in in leo. Aliquam non magna lacinia,
			convallis odio ac, maximus dolor. Vivamus ex justo, fermentum non tristique quis, vulputate
			nec urna. Vivamus sit amet vulputate enim, sed iaculis libero. Nulla facilisi. Morbi ac ligula
			ut nunc sodales posuere ut sit amet diam. Sed lobortis nisi et commodo consectetur.
			Suspendisse auctor viverra condimentum. Praesent auctor leo augue, vel consectetur tellus
			dapibus quis.</Col
		>
		<Col
			>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet vehicula auctor.
			Praesent vitae mi dolor. Integer ultrices magna nisi, sit amet porttitor arcu bibendum
			vulputate. Pellentesque pretium nibh id enim convallis cursus in ac nulla. Proin venenatis
			laoreet suscipit. Vestibulum eget est at mi consequat rhoncus sit amet sit amet enim. Aliquam
			in volutpat leo, a pretium nibh. Integer non eros semper nunc condimentum aliquam. Duis et
			elementum ipsum. Etiam vehicula orci vitae quam facilisis, ac ornare ante eleifend. Maecenas
			efficitur facilisis neque, ut efficitur sapien tempus a. Donec molestie, elit nec cursus
			rutrum, diam arcu tristique augue, sit amet ultrices tortor leo eget ipsum. Proin convallis ac
			leo quis faucibus. Vestibulum id convallis mauris. Quisque vitae dui vitae lacus bibendum
			posuere at et magna. Quisque efficitur tincidunt commodo. Maecenas ac placerat dolor, in
			scelerisque velit. Sed porta eros sapien. Sed eleifend, magna eget fermentum tincidunt, est
			mauris accumsan urna, at convallis purus diam eu lacus. Mauris imperdiet rutrum blandit. Nam
			lectus ipsum, dignissim id accumsan nec, finibus vel risus. Suspendisse euismod nec tellus sed
			euismod. Aenean sagittis tempus auctor. Nunc ac eros et justo fringilla ultrices quis non sem.
			Donec varius ac justo eu pretium. Duis quis magna tincidunt, lobortis tellus non, tempor
			velit. Sed molestie feugiat nulla, vel facilisis nunc. Donec eros nisl, consequat et quam eu,
			sollicitudin fermentum leo. Sed bibendum euismod mollis. Pellentesque facilisis eleifend
			libero in tempus. Pellentesque mattis varius nulla dictum sagittis. Integer aliquam turpis
			vitae tempus fermentum. Morbi id venenatis ligula, sit amet volutpat diam. Nunc vel euismod
			sapien. Donec vehicula metus vel gravida tincidunt. Etiam condimentum non velit ut venenatis.
			Nullam elementum, lacus nec fringilla sagittis, risus ante convallis ipsum, nec laoreet ante
			leo quis ligula. Maecenas enim justo, ultrices sit amet scelerisque vel, faucibus eget risus.
			Donec laoreet nisi eu pulvinar cursus. Sed tincidunt est arcu. Integer id dui in tellus
			bibendum sagittis. Ut non eros nibh. Suspendisse ligula libero, eleifend eget ipsum lacinia,
			dapibus laoreet ex. Praesent malesuada felis at magna tempor mollis. In non tempus nunc, non
			fermentum mi. Sed ornare congue nibh et hendrerit. Integer in nisi vitae lacus condimentum
			aliquet. Pellentesque at magna tempus, sollicitudin purus in, tempus est. Vivamus turpis est,
			ornare sit amet dapibus non, condimentum quis risus. Integer scelerisque velit in maximus
			suscipit. Integer magna turpis, bibendum quis elit auctor, tempor maximus erat. Proin vitae
			imperdiet libero. Cras ac sem et ipsum tristique mollis in in leo. Aliquam non magna lacinia,
			convallis odio ac, maximus dolor. Vivamus ex justo, fermentum non tristique quis, vulputate
			nec urna. Vivamus sit amet vulputate enim, sed iaculis libero. Nulla facilisi. Morbi ac ligula
			ut nunc sodales posuere ut sit amet diam. Sed lobortis nisi et commodo consectetur.
			Suspendisse auctor viverra condimentum. Praesent auctor leo augue, vel consectetur tellus
			dapibus quis.</Col
		>
	</Row>
</Container>
