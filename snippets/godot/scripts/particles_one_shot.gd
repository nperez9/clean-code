### this script is for one shot spawned partilces
# Requires a Timer childen node, the time will be replaced with the particle lifetime + configurable offset
extends GPUParticles2D

@export var lifetime_offset: float = 0.5

func _ready():
	emitting = true
	$Timer.start(lifetime + lifetime_offset)

func _on_timer_timeout():
	queue_free()
