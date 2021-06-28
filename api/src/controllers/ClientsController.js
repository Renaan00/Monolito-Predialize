const clients = require("../../clients.mock");

exports.getClients = (req, res, next) => {
    try {
        let array = [];
        for (let i = 0; i < clients.length; i++) {
        let enterprise = clients[i].enterprises;
        array.push({
            _id: clients[i]._id,
            name: clients[i].name,
            image_src: clients[i].image_src,
            total_enterprises: `${enterprise.length}`,
            enterprises: enterprise
        });
        }
        if (array.length === 0) { return res.status(404).send("Nenhum cliente foi encontrado") }
        return res.status(200).send(array);
    } catch (error) {
        if (error) { return res.status(500).send({ error: error }) }
    }
}
exports.getClientName = (req, res, next) => {
    try {
        const name = req.params.name;
        const data = clients.filter(d => d.name === name);
        if (data.length === 0) { return res.status(404).send("Nenhum usuário foi encontrado") } 
        return res.status(200).send(data);
    } catch (error) {
        if (error) { return res.status(500).send({ error: error }) }
    }
}
exports.getClientTotals = (req, res, next) => {
    try {
        const id = req.params.client_id;
        const allEnterprises = [];
        const allRealties = [];
        for (let i = 0; i < clients.length; i++) {
          if (clients[i]._id === id) {
            let enterprise = clients[i].enterprises;
            allEnterprises.push(enterprise.length);
            for (let j = 0; j < enterprise.length; j++) {
              allRealties.push(parseInt(enterprise[j].realties));
            }
            break;
          }
        }
        const totalEnterprises = allEnterprises.reduce((acc, e) => acc + e);
        const totalRealties = allRealties.reduce((acc, r) => acc + r);
        res.status(200).send({
          enterprises: `${totalEnterprises}`,
          totalRealties: `${totalRealties}`
        });
    } catch (error) {
        if (error) { return res.status(500).send({ error: error }) }
    }
}
exports.getEnterprises = (req, res, next) => {
    try {
        const array = [];
        for (let i = 0; i < clients.length; i++) {
          let enterprise = clients[i].enterprises;
          for (let j = 0; j < enterprise.length; j++) {
            array.push({
              _id: enterprise[j]._id,
              name: enterprise[j].name,
              image_src: enterprise[j].image_src,
              company_name: clients[i].name,
              realties: enterprise[j].realties
            });
          }
        }
        if (array.length === 0) { return res.status(404).send("Nenhum empreendimento foi encontrado") }
        return res.status(200).send(array);
    } catch (error) {
        if (error) { return res.status(500).send({ error: error }) }
    }
}
exports.getEnterpriseName = (req, res, next) => {
    try {
        const name = req.params.name;
        const array = [];
        for (let i = 0; i < clients.length; i++) {
          let enterprise = clients[i].enterprises;
          for (let j = 0; j < enterprise.length; j++) {
            if (enterprise[j].name === name) {
              array.push({
                _id: enterprise[j]._id,
                name: enterprise[j].name,
                image_src: enterprise[j].image_src,
                company_name: clients[i].name,
                realties: enterprise[j].realties
              });
              break;
            }
          }
        }
        if (array.length === 0) { return res.status(404).send("Nenhum empreendimento foi encontrado") }
        return res.status(200).send(array);
    } catch (error) {
        if (error) { return res.status(500).send({ error: error }) }
    }
}
exports.getEnterpriseClient = (req, res, next) => {
    try {
        const id = req.params.client_id;
        const array = [];
        for (let i = 0; i < clients.length; i++) {
          if (clients[i]._id === id) {
            let enterprise = clients[i].enterprises;
            for (let j = 0; j < enterprise.length; j++) {
              array.push({
                _id: enterprise[j]._id,
                name: enterprise[j].name,
                image_src: enterprise[j].image_src
              });
            }
            break;
          }  
        }
        if (array.length === 0) { return res.status(404).send("Nenhum empreendimento foi encontrado") }
        return res.status(200).send(array);
    } catch (error) {
        if (error) { return res.status(500).send({ error: error }) }
    }
}
exports.getEnterpriseClientName = (req, res, next) => {
    try {
        const id = req.params.client_id;
        const name = req.params.name;
        const array = [];
        for (let i = 0; i < clients.length; i++) {
          if (clients[i]._id === id) {
            let enterprise = clients[i].enterprises;
            for (let j = 0; j < enterprise.length; j++) {
              if (enterprise[j].name === name) {
                array.push({
                  _id: enterprise[j]._id,
                  name: enterprise[j].name,
                  image_src: enterprise[j].image_src,
                  realties: enterprise[j].realties
                });
                break;
              }
            }
          }
        }
        if (array.length === 0) { return res.status(404).send("Nenhum empreendimento foi encontrado") }
        return res.status(200).send(array);
    } catch (error) {
        if (error) { return res.status(500).send({ error: error }) }
    }
}
exports.getTotals = (req, res, next) => {
    try {
        const allEnterprises = [];
        const allRealties = [];
        for (let i = 0; i < clients.length; i++) {
          let enterprise = clients[i].enterprises;
          allEnterprises.push(enterprise.length);
          for (let j = 0; j < enterprise.length; j++)
            allRealties.push(parseInt(enterprise[j].realties));
        }
        const totalEnterprises = allEnterprises.reduce((acc, e) => acc + e);
        const totalRealties = allRealties.reduce((acc, r) => acc + r);
        res.status(200).send({
          total_clients: `${clients.length}`,
          total_enterprises: `${totalEnterprises}`,
          total_realties: `${totalRealties}`
        });
    } catch (error) {
        if (error) { return res.status(500).send({ error: error }) }
    }
}
exports.getClientId = (req, res, next) => {
    try {
        const id = req.params._id;
        const array = [];
        for (let i = 0; i < clients.length; i++) {
          if (clients[i]._id === id) {
            array.push({
              _id: clients[i]._id,
              name: clients[i].name,
              image_src: clients[i].image_src
            });
            break;
          }
        }
        if (array.length === 0) { return res.status(404).send("Nenhum usuário foi encontrado") } 
        return res.status(200).send(array);
    } catch (error) {
        if (error) { return res.status(500).send({ error: error }) }
    }
}