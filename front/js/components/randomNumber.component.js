class RandomNumber extends Component {
    constructor(selector) {
        super(selector);
        this.randomNumbers = [];
    }

    init() {
        setInterval(() => {
            axios.get('http://localhost:3000/random-numbers')
                .then(response => {
                    this.randomNumbers = response.data.data.map(number => {
                        return {
                            id: number
                        }
                    });
                    this.render();
                })
                .catch(error => {
                    console.error(error);
                })
        },10000);
    }

    render() {
        const container = this.getDOMElement();

        this.randomNumbers.forEach(number => {
            const parentElem = document.querySelector(this.selector);
            this.allDrawnNumbers.push(number.id);

            if(parentElem.children.length < 5){
                const element = document.createElement('span');
                element.classList.add('list-group-item');
                element.innerHTML = number.id;
                container.appendChild(element);
            }else{
                parentElem.innerHTML = '';
                const element = document.createElement('span');
                element.classList.add('list-group-item');
                element.innerHTML = number.id;
                container.appendChild(element);
            }

        });
    }
}