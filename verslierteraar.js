// Stop ingredient erin
function versliert(ingredient) {
	switch (ingredient) {
		case 'vlees':
			return 'spaghetti'; // Maak gehakt
		case 'pastadeeg':
			return 'spaghetti'; // Maak spaghetti
		case 'rijstbloem':
			return 'mihoen'; // Maak mihoen
	}
}

module.exports = versliert;