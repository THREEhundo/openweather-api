export default function locationPane(city) {
	const locationContainer = document.createElement('div')
	locationContainer.id = 'location-container'
	locationContainer.className = 'weather-item'

	const location = document.createElement('div')
	location.id = 'location'
	location.innerHTML = `${city.city.toUpperCase()}, ${city.country.toUpperCase()}`

	const description = document.createElement('div')
	description.id = 'description'
	description.innerHTML = city.description.toUpperCase()

	const localeTime = document.createElement('div')
	localeTime.id = 'locale-time'
	const timeConverter = new Date(city.locale_time * city.timezone)

	const date = new Date()
	const [month, day, year] = [
		date.getMonth(),
		date.getDate(),
		date.getFullYear(),
	]
	const [hour, minutes] = [date.getHours(), date.getMinutes()]

	localeTime.innerHTML = `${(hour, minutes, month, day, year)}`

	locationContainer.appendChild(location)
	locationContainer.appendChild(description)
	description.appendChild(localeTime)

	return locationContainer
}
