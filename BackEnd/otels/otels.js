const { create } = require("domain")
const fs = require("fs")


class Otels{
    constructor(filename = "data.json"){
        this.path = `./data/${filename}`

        try {
            fs.readdirSync('data')
        } catch (error) {
            fs.mkdirSync('data')
        }

        try {
            fs.accessSync(this.path)
        } catch (error) {
            fs.writeFileSync(this.path, '[]');
        }
    }

    createId(){
        return new Date().getTime().toString();
    }

    async create(data){
        const otelData = await this.getAll()
        const ID = this.createId();
        otelData.push({...data, ID});

        await fs.promises.writeFile(this.path, JSON.stringify(otelData, null, 2));
    }

    async getAll(){
        return JSON.parse(await fs.promises.readFile(this.path));
    }

    async getSingle(ID){
        const data = await this.getAll();
        return data.find(otels => otels.ID === ID)
    }

    async getByCategory(category){
        const data = await this.getAll();
        return data.filter(otels => otels.category === category)
    }
}

module.exports = Otels;