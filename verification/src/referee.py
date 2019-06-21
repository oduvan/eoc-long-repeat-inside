from checkio_referee import RefereeRank, ENV_NAME



import settings_env
from tests import TESTS


class Referee(RefereeRank):
    TESTS = TESTS
    ENVIRONMENTS = settings_env.ENVIRONMENTS

    DEFAULT_FUNCTION_NAME = "repeat_inside"
    FUNCTION_NAMES = {
        "python_3": "repeat_inside",
        "js_node": "repeatInside"
    }
    ENV_COVERCODE = {
        
    }