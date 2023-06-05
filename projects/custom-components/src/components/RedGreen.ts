
/*
#DCECOMP{
    "class": "RedGreen",
    "properties": [
        {
            "name": "isRed",
            "type": "bool",
            "default": false
        }
    ]
}
*/

//@Component("RedGreen")
//export class RedGreen {
//    public isRed: boolean = false;
//
//    private _redMaterial: Material = new Material();
//    private _greenMaterial: Material = new Material();
//
//    init(entity: Entity) {
//        this._redMaterial.albedoColor = Color3.Red();
//        this._greenMaterial.albedoColor = Color3.Green();
//
//        entity.addComponentOrReplace(this.isRed ? this._redMaterial : this._greenMaterial);
//    }
//}