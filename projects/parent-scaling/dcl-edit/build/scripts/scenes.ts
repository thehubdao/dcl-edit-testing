export type DceScene = {
    sceneRoot: DceEntity

    /**
     * Shortcut for `sceneRoot.show()`
     */
    show: () => void;

    /**
     * Shortcut for `sceneRoot.hide()`
     */
    hide: () => void
}

export type DceEntity = {
    entity: Entity
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

export type NewScene = DceScene & {
    exposed: {
    }
}

export class SceneFactory {
    static createNewScene(): NewScene {
        const rootEntity = new Entity()
        const rootEntityTrans = new Transform()
        rootEntity.addComponent(rootEntityTrans)

        const CubeEntity = new Entity("Cube Entity")
        const CubeEntityTransform = new Transform()
        CubeEntityTransform.position = new Vector3(5.25, 1.25, 8)
        CubeEntityTransform.rotation = new Quaternion(0, 0, 0, 1)
        CubeEntityTransform.scale = new Vector3(0.5, 0.5, 2.25)
        CubeEntity.addComponent(CubeEntityTransform)
        const CubeEntityBoxShape = new BoxShape()
        CubeEntity.addComponent(CubeEntityBoxShape)

        const CubeEntity1 = new Entity("Cube Entity")
        const CubeEntity1Transform = new Transform()
        CubeEntity1Transform.position = new Vector3(0.01549888, 0, 3.471073)
        CubeEntity1Transform.rotation = new Quaternion(0, 0, 0, 1)
        CubeEntity1Transform.scale = new Vector3(1, 1, 1)
        CubeEntity1.addComponent(CubeEntity1Transform)
        const CubeEntity1BoxShape = new BoxShape()
        CubeEntity1.addComponent(CubeEntity1BoxShape)

        const CubeEntity2 = new Entity("Cube Entity")
        const CubeEntity2Transform = new Transform()
        CubeEntity2Transform.position = new Vector3(3, 0, -0.666)
        CubeEntity2Transform.rotation = new Quaternion(0, 0.258819, 0, 0.9659259)
        CubeEntity2Transform.scale = new Vector3(1, 1, 1)
        CubeEntity2.addComponent(CubeEntity2Transform)
        const CubeEntity2BoxShape = new BoxShape()
        CubeEntity2.addComponent(CubeEntity2BoxShape)

        CubeEntity.setParent(rootEntity)
        CubeEntity1.setParent(CubeEntity2)
        CubeEntity2.setParent(CubeEntity)

        engine.addEntity(rootEntity)

        return {
            sceneRoot: {
                entity: rootEntity,
                transform: rootEntityTrans,
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
