class Ranking extends Component {
    constructor(selector, allDrawnNumbers) {
        super(selector);
        this.numbers = [];
        this.firstFetchNumbers = [];
        this.allDrawnNumbers = allDrawnNumbers;
    }

    // I wasn't sure if I can remove this fetch-axios section and that's why I leave it
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
            const tableData = document.createElement('li');
            tableData.classList.add('list-group-item');
            tableData.innerHTML = number.id;
            container.appendChild(tableData);
            this.firstFetchNumbers.push(number.id);
        });

        setInterval(() => {
            container.innerHTML = '';
            let repeatNumbers = this.allDrawnNumbers.reduce(function (obj, b) {
                obj[b] = ++obj[b] || 1;
                return obj;
            }, {});

            let repeatNumbersSortedByValue = Object.keys(repeatNumbers).sort(function (a, b) {
                return repeatNumbers[b] - repeatNumbers[a]
            });

            repeatNumbersSortedByValue.forEach(key => {
                const listElement = document.createElement('td');
                listElement.classList.add('list-group-item');
                listElement.innerHTML = key;
                container.appendChild(listElement);
                this.firstFetchNumbers.push(key);
            });

        }, 10000);
    }
}