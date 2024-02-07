---
title: Serving LLMs
sidebar_position: 1
---

# Deploy LLMs with DeepSparse

[DeepSparse](https://github.com/neuralmagic/deepsparse) is a CPU inference runtime that takes advantage of sparsity to accelerate neural network inference. Coupled with [SparseML](https://github.com/neuralmagic/sparseml), our optimization library for pruning and quantizing your models, DeepSparse delivers exceptional inference performance on CPU hardware.

Neural Magic supports performant LLM inference in DeepSparse with:
- Sparse kernels for faster inference and memory savings from unstructured sparse weights
- 8-bit weight and activation quantization support
- Efficient management of cached attention keys and values for minimal latency
- Continuous batching to optimize output tokens generation throughput
- Streaming outputs
- OpenAI-compatible API server

![mpt-chat-comparison](https://github.com/neuralmagic/deepsparse/assets/3195154/ccf39323-4603-4489-8462-7b103872aeb3)

Here's a minimal example showing how to use DeepSparse for text generation with `TinyStories-1M`, a very small model for generating stories. 
```python
from deepsparse import TextGeneration
pipeline = TextGeneration(model="hf:mgoin/TinyStories-1M-ds")
print(pipeline("Once upon a time, ").generations[0].text)
"""
One day, a little girl named Lily went to the park with her mommy. They saw a big slide and wanted to slide down the slide. Lily said, "Mommy, can I go on the slide?" Her mommy said, "Yes, you can go on the slide."
"""
```

> Check out the [`TextGeneration` documentation for usage details.](ADD LINK)

### Supported LLM Architectures 

DeepSparse supports many Hugging Face models through [ONNX export through SparseML][ADD LINK], include the following architectures:

* LLaMA & LLaMA-2 - [neuralmagic/Llama2-7b-chat-pruned50-quant-ds](https://huggingface.co/neuralmagic/Llama2-7b-chat-pruned50-quant-ds), [neuralmagic/Nous-Hermes-llama-2-7b-pruned50-quant-ds](https://huggingface.co/neuralmagic/Nous-Hermes-llama-2-7b-pruned50-quant-ds), [neuralmagic/TinyLlama-1.1B-Chat-v0.4-pruned50-quant-ds](https://huggingface.co/neuralmagic/TinyLlama-1.1B-Chat-v0.4-pruned50-quant-ds)
* Mistral - [neuralmagic/OpenHermes-2.5-Mistral-7B-pruned50-quant-ds](https://huggingface.co/neuralmagic/OpenHermes-2.5-Mistral-7B-pruned50-quant-ds) - [SparseZoo Models](https://sparsezoo.neuralmagic.com/?architectures=mistral&ungrouped=true)
* MPT - [neuralmagic/mpt-7b-chat-pruned50-quant-ds](https://huggingface.co/neuralmagic/mpt-7b-chat-pruned50-quant-ds) - [SparseZoo Models](https://sparsezoo.neuralmagic.com/?architectures=mpt&ungrouped=true)
* OPT - facebook/opt-6.7b, etc. - [SparseZoo Models](https://sparsezoo.neuralmagic.com/?architectures=opt&ungrouped=true)
* SOLAR - [neuralmagic/Nous-Hermes-2-SOLAR-10.7B-pruned50-quant-ds](https://huggingface.co/neuralmagic/Nous-Hermes-2-SOLAR-10.7B-pruned50-quant-ds)


### Making new DeepSparse-optimized models

[See the guide for compressing LLMs with SparseGPT](./guides/one-shot-llms-with-sparseml.mdx)