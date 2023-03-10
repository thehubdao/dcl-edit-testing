/*
#DCECOMP
{
    "className": "Elevator",
    "componentName": "Elevator",
    "properties": [
        {
            "name": "height",
            "type": "number",
        },
        {
            "name": "speed",
            "type": "number",
        }
    ]
}
*/


@Component("Elevator")
export class Elevator {
    private startPos: Vector3 = new Vector3(0, 0, 0);
    public height: number = 5;
    public speed: number = 1;

    private goingUp: boolean = true;
    private isInitialized: boolean = false;

    constructor() {}

    private init(entity: IEntity){
        if (this.isInitialized) {
            return;
        }

        this.startPos = entity.getComponent(Transform).position.clone();
    
        this.isInitialized = true;
    }

    public calculateStep(dt: number, entity: IEntity) {
        this.init(entity);

        let transform = entity.getComponent(Transform);
        let currentPos = transform.position;

        let normalizedMovement = this.speed * (this.goingUp ? 1 : -1);
        let movementInStep = normalizedMovement * dt;

        // set new position
        currentPos.y += movementInStep;

        // check if we reached the top or bottom
        if (currentPos.y > (this.startPos.y + this.height)) {
            currentPos.y = this.startPos.y + this.height;
            this.goingUp = false;
        }

        if (currentPos.y < this.startPos.y) {
            currentPos.y = this.startPos.y;
            this.goingUp = true;
        }
    }
}

class ElevatorSystem implements ISystem {
    update(dt: number) {
        for (const entity of engine.getComponentGroup(Elevator).entities) {
            let elevator = entity.getComponent(Elevator);

            elevator.calculateStep(dt, entity);
        }
    }
}

engine.addSystem(new ElevatorSystem());