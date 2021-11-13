export default class SwapiService {
    _apiBase = 'https://swapi.dev/api';
    _elementRegEx = /\/([0-9]*)\/$/

    regExIdConvert (element){
        return element.url.match(this._elementRegEx)[1];
    }

    getResource = async url => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}`
                + `, received ${res.status}`)
        }

        const body =
            await res.json();
        return body;
    };

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    };

    getPerson = async id => {
        const person = await this.getResource(`/people/${id}/`)
        return this._transformPerson(person);
    };

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    };

    getPlanet = async id => {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    };

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    };

    getStarship = async id => {
        const starship = await this.getResource(`/starships/${id}`)
        return this._transformStarship(starship);
    };

    getSelectDataToDisplay = (get, id) => {
        if (get === 'person')
            return this.getPerson(id)
        if (get === 'planet')
            return this.getPlanet(id)
        if (get === 'starship')
            return this.getStarship(id)
    };

    _transformPerson = (person) => {
        return {
            Id: this.regExIdConvert(person),
            Name: person.name,
            Url: `https://starwars-visualguide.com/assets/img/characters/${this.regExIdConvert(person)}.jpg`,
            desc_1: 'Height',
            personHeight: person.height,
            desc_2: 'Mass',
            personMass: person.mass,
            desc_3: 'Hair Color',
            personHairColor: person.hair_color,
            desc_4: 'Skin Color',
            personSkinColor: person.skin_color,
            desc_5: 'Birth Year',
            personBirthYear: person.birth_year,
            desc_6: 'Gender',
            personGender: person.gender
        }
    }

    _transformPlanet = (planet) => {
        return {
            Id: this.regExIdConvert(planet),
            Name: planet.name,
            Url: `https://starwars-visualguide.com/assets/img/planets/${this.regExIdConvert(planet)}.jpg`,
            desc_1: 'Population',
            planetPopulation: planet.population,
            desc_2: 'Climate',
            planetClimate: planet.climate,
            desc_3: 'Diameter',
            planetDiameter: planet.diameter,
            desc_4: 'Gravity',
            planetGravity: planet.gravity,
            desc_5: 'Rotation Period',
            planetRotationPeriod: planet.rotation_period,
            desc_6: 'Orbital Period',
            planetOrbitalPeriod: planet.orbital_period,
        }
    }

    _transformStarship = (starship) => {
        return {
            Id: this.regExIdConvert(starship),
            Name: starship.name,
            Url: `https://starwars-visualguide.com/assets/img/starships/${this.regExIdConvert(starship)}.jpg`,
            desc_1: 'Model',
            starshipModel: starship.model,
            desc_2: 'Consumables',
            starshipConsumables: starship.consumables,
            desc_3: 'MaxSpeed',
            starshipMaxSpeed: starship.max_atmosphering_speed,
            desc_4: 'Length',
            starshipLength: starship.length,
            desc_5: 'Crew',
            starshipCrew: starship.crew,
            desc_6: 'Drive Rating',
            starshipDriveRating: starship.hyperdrive_rating
        }
    }
}