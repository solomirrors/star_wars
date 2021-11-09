export default class SwapiService {
    _apiBase = 'https://swapi.dev/api';
    _elementRegEx = /\/([0-9]*)\/$/

    regExIdConvert (element){
        return element.url.match(this._elementRegEx)[1];
    }

    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}`
                + `, received ${res.status}`)
        }

        const body =
            await res.json();
        return body;
    }

    async getAllPeople(){
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`)
        return this._transformPerson(person);
    }

    async getAllPlanets(){
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id){
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    async getAllStarships(){
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    async getStarship(id){
        const starship = await this.getResource(`/starships/${id}`)
        return this._transformStarship(starship);
    }

    _transformPerson(person) {
        return {
            personId: this.regExIdConvert(person),
            personName: person.name,
            personHeight: person.height,
            personMass: person.mass,
            personHairColor: person.hair_color,
            personSkinColor: person.skin_color,
            personBirthYear: person.birth_year,
            personGender: person.gender
        }
    }

    _transformPlanet(planet) {
        return {
            planetId: this.regExIdConvert(planet),
            planetName: planet.name,
            planetPopulation: planet.population,
            planetClimate: planet.climate,
            planetDiameter: planet.diameter,
            planetGravity: planet.gravity,
            planetRotationPeriod: planet.rotation_period,
            planetOrbitalPeriod: planet.orbital_period,
        }
    }

    _transformStarship(starship) {
        return {
            starshipId: this.regExIdConvert(starship),
            starshipName: starship.name,
            starshipModel: starship.model,
            starshipConsumables: starship.consumables,
            starshipMaxSpeed: starship.max_atmosphering_speed,
            starshipLength: starship.length,
            starshipCrew: starship.crew,
            starshipDriveRating: starship.hyperdrive_rating
        }
    }
}