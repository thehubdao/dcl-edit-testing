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

export type WithSphereShape = {
    sphereShape: SphereShape
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

        const DefaultSphere = new Entity("Default Sphere")
        const DefaultSphereTransform = new Transform()
        DefaultSphereTransform.position = new Vector3(8, 2, 6)
        DefaultSphereTransform.rotation = new Quaternion(0, 0, 0, 1)
        DefaultSphereTransform.scale = new Vector3(1, 1, 1)
        DefaultSphere.addComponent(DefaultSphereTransform)
        const DefaultSphereSphereShape = new SphereShape()
        DefaultSphere.addComponent(DefaultSphereSphereShape)

        const DefaultCube = new Entity("Default Cube")
        const DefaultCubeTransform = new Transform()
        DefaultCubeTransform.position = new Vector3(8, 0.5, 3)
        DefaultCubeTransform.rotation = new Quaternion(0, 0, 0, 1)
        DefaultCubeTransform.scale = new Vector3(1, 1, 1)
        DefaultCube.addComponent(DefaultCubeTransform)
        const DefaultCubeBoxShape = new BoxShape()
        DefaultCube.addComponent(DefaultCubeBoxShape)

        DefaultSphere.setParent(rootEntity)
        DefaultCube.setParent(rootEntity)

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
