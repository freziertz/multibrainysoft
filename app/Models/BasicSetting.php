<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Config;

class BasicSetting extends Model
{
        /**
     * @var string
     */
    protected $table = 'basic_settings';

    /**
     * @var array
     */
    protected $fillable = ['key', 'value','company_id','description'];

    /**
     * @param $key
     */
    public static function get($key)
    {
        $setting = new self();
        $entry = $setting->where('key', $key)->first();
        if (!$entry) {
            return;
        }
        return $entry->value;
    }

    /**
     * @param $key
     * @param null $value
     * @return bool
     */
    public static function set($key, $value = null)
    {
        $setting = new self();
        $entry = $setting->where('key', $key)->firstOrFail();
        $entry->value = $value;
        $entry->saveOrFail();
        Config::set('key', $value);
        if (Config::get($key) == $value) {
            return true;
        }
        return false;
    }
}
