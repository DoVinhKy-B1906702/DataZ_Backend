const tableModel = require('../models/Tabel.model');



exports.create = async (req, res, next) => {
    try {
        let newArr = [];
        const lengthOfArray = req.body.key.length;
        
            // for (let v = 0; v < lengthOfValueArr; v++) {
            //     valueArr.push(req.body.value[v].toString())
            // }    


            for(let i = 0; i < lengthOfArray ; i++){
               

                // let valueArr = [];
                // valueArr.push([`value${i}`]);
                newArr.push({
                    key: req.body.key[i],
                    input:req.body.input[i],
                    value: req.body.value[i]
                    // value: req.body.value[i]
                })}
            console.log('newArr:',newArr);
            // console.log('arrValue:',valueArr);
            
        const table = new tableModel({
            ...req.body,
            content: newArr
                
            
        });
        await table.save()


        res.status(200).json(table);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error
        });
    }
}
exports.get = async (req, res, next) => {
    try {
        const table = await tableModel.find();
        console.log('table', table);
        res.status(200).json(table);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error
        });
    }
}