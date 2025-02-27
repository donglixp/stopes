# Copyright (c) Meta Platforms, Inc. and affiliates.
# All rights reserved.
#
# This source code is licensed under the license found in the
# LICENSE file in the root directory of this source tree.


import logging
import shlex
import subprocess
import typing as tp
from dataclasses import dataclass
from pathlib import Path

from omegaconf.omegaconf import MISSING

from stopes.core.stopes_module import StopesModule
from stopes.core.utils import bash_pipefail, open_file_cmd

logger = logging.getLogger("count_lines")


@dataclass
class CountLinesConfig:
    shards: tp.List[str] = MISSING


class CountLinesModule(StopesModule):
    def __init__(
        self,
        config: CountLinesConfig = CountLinesConfig(),
    ):
        super().__init__(config, CountLinesConfig)

    def array(self):
        return self.config.shards

    async def run(
        self,
        iteration_value: tp.Optional[tp.Any] = None,
        iteration_index: int = 0,
    ) -> tp.Tuple[Path, Path]:
        filename = iteration_value
        result = subprocess.run(
            bash_pipefail(
                open_file_cmd(filename),
                shlex.join(["wc", "-l"]),
            ),
            capture_output=True,
            shell=True,
        )
        out = result.stdout.decode("utf-8")
        lines_numbers = [int(line) for line in out.split() if line]
        logger.info(f"line count for {iteration_value} is {lines_numbers}")
        assert len(lines_numbers) == 1
        return lines_numbers[0]

    def comment(self):
        return "Counting number of sentences in the text input"

    def version(self):
        return "0.0"
