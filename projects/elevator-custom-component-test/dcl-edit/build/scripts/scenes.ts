import { Elevator } from "src/elevator"
export type DceScene = {
    /**
     * The root entity of the scene. All entities in this scene are children of either this scene root entity, or of another entity in the scene
     */
    sceneRoot: DceEntity

    /**
     * Shows the scene with all its entities. Shortcut for `sceneRoot.show()`
     */
    show: () => void;

    /**
     * Hides the scene with all its entities. Shortcut for `sceneRoot.hide()`
     */
    hide: () => void
}

export type DceEntity = {
    /**
     * The Decentraland entity
     */
    entity: Entity

    /**
     * The Transform component of the entity. Although, it is not required by Decentraland, every DceEntity will have a Transform added
     */
    transform: Transform

    /**
     * Show this entity and all its children. This calls `engine.addEntity(entity)` internally.
     */
    show: () => void

    /**
     * Hide this entity and all its children. This calls `engine.removeEntity(entity)` internally.
     */
    hide: () => void
}

export type WithBoxShape = {
    boxShape: BoxShape
}

export type WithElevator = {
    elevator: Elevator
}

export type MainScene = DceScene & {
    exposed: {
    }
}

export class SceneFactory {
    /**
     * Creates a new instance of the scene MainScene
     * @param rootEntity specify a root entity for the newly created scene. If null, a new Entity will be generated as the root
     */
    static createMainScene(rootEntity: Entity | null = null): MainScene {
        if (rootEntity == null) {
            rootEntity = new Entity()
            const rootEntityTrans = new Transform()
            rootEntity.addComponent(rootEntityTrans)
        } else {
            if (!rootEntity.hasComponent(Transform)) {
                rootEntity.addComponent(new Transform)
            }
        }

        const ent4_BoxEntity1 = new Entity("Box Entity")
        const ent4_BoxEntity1Transform = new Transform()
        ent4_BoxEntity1Transform.position = new Vector3(6, 0, 6)
        ent4_BoxEntity1Transform.rotation = new Quaternion(0, 0, 0, 1)
        ent4_BoxEntity1Transform.scale = new Vector3(4, 0.25, 6)
        ent4_BoxEntity1.addComponent(ent4_BoxEntity1Transform)
        const ent4_BoxEntity1BoxShape = new BoxShape()
        ent4_BoxEntity1.addComponent(ent4_BoxEntity1BoxShape)

        const ent4_BoxEntity2 = new Entity("Box Entity")
        const ent4_BoxEntity2Transform = new Transform()
        ent4_BoxEntity2Transform.position = new Vector3(3, 4, 5)
        ent4_BoxEntity2Transform.rotation = new Quaternion(0, 0, 0, 1)
        ent4_BoxEntity2Transform.scale = new Vector3(2, 0.25, 4)
        ent4_BoxEntity2.addComponent(ent4_BoxEntity2Transform)
        const ent4_BoxEntity2BoxShape = new BoxShape()
        ent4_BoxEntity2.addComponent(ent4_BoxEntity2BoxShape)

        const ent4_BoxEntity3 = new Entity("Box Entity")
        const ent4_BoxEntity3Transform = new Transform()
        ent4_BoxEntity3Transform.position = new Vector3(3, 0, 5)
        ent4_BoxEntity3Transform.rotation = new Quaternion(0, 0, 0, 1)
        ent4_BoxEntity3Transform.scale = new Vector3(2, 0.25, 4)
        ent4_BoxEntity3.addComponent(ent4_BoxEntity3Transform)
        const ent4_BoxEntity3BoxShape = new BoxShape()
        ent4_BoxEntity3.addComponent(ent4_BoxEntity3BoxShape)

        const ent4_BoxEntity4 = new Entity("Box Entity")
        const ent4_BoxEntity4Transform = new Transform()
        ent4_BoxEntity4Transform.position = new Vector3(6, 4, 6)
        ent4_BoxEntity4Transform.rotation = new Quaternion(0, 0, 0, 1)
        ent4_BoxEntity4Transform.scale = new Vector3(4, 0.25, 6)
        ent4_BoxEntity4.addComponent(ent4_BoxEntity4Transform)
        const ent4_BoxEntity4BoxShape = new BoxShape()
        ent4_BoxEntity4.addComponent(ent4_BoxEntity4BoxShape)

        const ent4_Elevator1 = new Entity("Elevator")
        const ent4_Elevator1Transform = new Transform()
        ent4_Elevator1Transform.position = new Vector3(3, 0, 8)
        ent4_Elevator1Transform.rotation = new Quaternion(0, 0, 0, 1)
        ent4_Elevator1Transform.scale = new Vector3(1.75, 0.25, 1.75)
        ent4_Elevator1.addComponent(ent4_Elevator1Transform)
        const ent4_Elevator1BoxShape = new BoxShape()
        ent4_Elevator1.addComponent(ent4_Elevator1BoxShape)
        const ent4_Elevator1Elevator = new Elevator()
        ent4_Elevator1Elevator.height = 4
        ent4_Elevator1Elevator.speed = 0.8
        ent4_Elevator1.addComponent(ent4_Elevator1Elevator)

        const ent4_LowerFloor1 = new Entity("Lower Floor")
        const ent4_LowerFloor1Transform = new Transform()
        ent4_LowerFloor1Transform.position = new Vector3(0, 0, 0)
        ent4_LowerFloor1Transform.rotation = new Quaternion(0, 0, 0, 1)
        ent4_LowerFloor1Transform.scale = new Vector3(1, 1, 1)
        ent4_LowerFloor1.addComponent(ent4_LowerFloor1Transform)

        const ent4_UpperFloor1 = new Entity("UpperFloor")
        const ent4_UpperFloor1Transform = new Transform()
        ent4_UpperFloor1Transform.position = new Vector3(0, 0, 0)
        ent4_UpperFloor1Transform.rotation = new Quaternion(0, 0, 0, 1)
        ent4_UpperFloor1Transform.scale = new Vector3(1, 1, 1)
        ent4_UpperFloor1.addComponent(ent4_UpperFloor1Transform)

        ent4_BoxEntity1.setParent(ent4_LowerFloor1)
        ent4_BoxEntity2.setParent(ent4_UpperFloor1)
        ent4_BoxEntity3.setParent(ent4_LowerFloor1)
        ent4_BoxEntity4.setParent(ent4_UpperFloor1)
        ent4_Elevator1.setParent(rootEntity)
        ent4_LowerFloor1.setParent(rootEntity)
        ent4_UpperFloor1.setParent(rootEntity)

        engine.addEntity(rootEntity)

        return {
            sceneRoot: {
                entity: rootEntity,
                transform: rootEntity.getComponent(Transform),
                show() { engine.addEntity(this.entity) },
                hide() { engine.removeEntity(this.entity) }
            },
            exposed: {
            },

            show() { this.sceneRoot.show() },
            hide() { this.sceneRoot.hide() }
        }
    }
}
