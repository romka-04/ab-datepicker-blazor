using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace Blazor.AbDatePicker
{
    public class AdDatepickerOptions
    {
        public Theme Theme { get; set; }
        public StartView StartView { get; set; }
        public WeekDayFormat WeekDayFormat { get; set; }
        public DayOfWeek FirstDayOfWeek { get; set; }
        public List<DayOfWeek> DisabledDayOfWeek { get; set; } = new List<DayOfWeek>();
        public List<string> InputFormats { get; set; } = new() {"dd-MM-yyyy"};
        public string OutputFormat { get; set; } = "dd-MM-yyyy";
        public DateTime? MinDate { get; set; }
        public DateTime? MaxDate { get; set; }
        public bool Modal { get; set; }
        public bool Inline { get; set; }
        public bool Disable { get; set; }
        public string Markup { get; } = "bootstrap4";
    }

    [JsonConverter(typeof(CustomJsonStringEnumConverter))]
    public enum Theme
    {
        [EnumMember(Value = "default")]
        Default,
        [EnumMember(Value = "bootstrap")]
        Bootstrap,
        [EnumMember(Value = "blue")]
        Blue,
        [EnumMember(Value = "green")]
        Green,
        [EnumMember(Value = "marron")]
        // ReSharper disable once UnusedMember.Global
        Marron
    }
    public enum StartView
        : byte
    {
        Days = 0,
        Months = 1,
        Years = 2,
        Default = Days
    }

    public enum WeekDayFormat
    {
        Short,
        Narrow,
        Default = Short
    }

    public enum DayOfWeek
        : byte
    {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6,
    }
}