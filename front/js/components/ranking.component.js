class Ranking extends Component {
    constructor(selector) {
        super(selector);
        this.numbers = [];
    }

    init() {
        axios.get('http://localhost:3000/numbers')
            .then(response => {
                this.numbers = response.data.data.map(number => {
                    return {
                        id: number
                    }
                });

                this.render();

            })
            .catch(error => {
                console.error(error);
            })
    }

    render() {
        const container = this.getDOMElement();

        this.numbers.forEach(number => {
            const listElement = document.createElement('li');
            listElement.classList.add('list-group-item');
            listElement.innerHTML = number.id;

            container.appendChild(listElement);
        });
    }
}